import { useEffect, useReducer } from 'react';

import { siteConfig } from '@/data/portfolio';

const PHRASES = siteConfig.home.rolePhrases;

export const TypewriterStatus = {
  TYPING: 'typing',
  DISPLAYED: 'displayed',
  DELETING: 'deleting',
} as const;

export type TypewriterStatus = (typeof TypewriterStatus)[keyof typeof TypewriterStatus];

interface TypewriterState {
  status: TypewriterStatus;
  displayed: string;
  phraseIndex: number;
  currentPhrase: string;
  phrases: string[] | readonly string[];
}

export const TypewriterActionTypes = {
  TICK: 'tick',
} as const;

type TypewriterActionTypes = (typeof TypewriterActionTypes)[keyof typeof TypewriterActionTypes];

interface TypewriterActions {
  type: TypewriterActionTypes;
}

function typewriterReducer(state: TypewriterState, action: TypewriterActions): TypewriterState {
  if (action.type !== TypewriterActionTypes.TICK) return state;

  if (state.status === TypewriterStatus.TYPING) {
    if (state.displayed.length < state.currentPhrase.length) {
      return { ...state, displayed: state.currentPhrase.slice(0, state.displayed.length + 1) };
    }
    return { ...state, status: TypewriterStatus.DISPLAYED };
  }

  if (state.status === TypewriterStatus.DISPLAYED) {
    return { ...state, status: TypewriterStatus.DELETING };
  }

  if (state.status === TypewriterStatus.DELETING) {
    if (state.displayed.length > 0) {
      return { ...state, displayed: state.currentPhrase.slice(0, state.displayed.length - 1) };
    }
    const nextIndex = (state.phraseIndex + 1) % state.phrases.length;
    const nextPhrase = state.phrases[nextIndex];
    return { ...state, status: TypewriterStatus.TYPING, phraseIndex: nextIndex, currentPhrase: nextPhrase };
  }

  return state;
}

export function useRolesTypewriter(delay = 80, pauseMs = 1800): { role: string; status: TypewriterStatus } {
  const [typewriterState, dispatchTypewriterAction] = useReducer(typewriterReducer, {
    status: TypewriterStatus.TYPING,
    displayed: '',
    phraseIndex: 0,
    currentPhrase: PHRASES[0],
    phrases: PHRASES,
  });

  useEffect(() => {
    let timeoutDelay = delay;
    if (typewriterState.status === TypewriterStatus.DISPLAYED) {
      timeoutDelay = pauseMs;
    } else if (typewriterState.status === TypewriterStatus.DELETING) {
      timeoutDelay = delay / 2;
    }

    const timeout = setTimeout(() => dispatchTypewriterAction({ type: TypewriterActionTypes.TICK }), timeoutDelay);
    return (): void => clearTimeout(timeout);
  }, [typewriterState.status, typewriterState.displayed, delay, pauseMs]);

  return { role: typewriterState.displayed, status: typewriterState.status };
}
