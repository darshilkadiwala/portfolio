import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from '@/components/ui/contribution-graph';
import { useGitHubActivity } from '@/hooks/use-github-activity';

interface GitHubActivityProps {
  username: string;
}

export function GitHubActivity({ username }: GitHubActivityProps) {
  const { data, loading, totalContributions } = useGitHubActivity(username);

  if (loading) {
    return (
      <div className='flex flex-col gap-3'>
        <div className='bg-muted h-4 w-48 animate-pulse rounded-sm' />
        <div className='bg-muted h-32 w-full animate-pulse rounded-sm' />
      </div>
    );
  }

  if (data.length === 0) return null;

  return (
    <ContributionGraph data={data} className='w-full' totalCount={totalContributions}>
      <ContributionGraphCalendar className='w-full'>
        {({ activity, dayIndex, weekIndex }: { activity: Activity; dayIndex: number; weekIndex: number }) => (
          <ContributionGraphBlock
            key={activity.date}
            activity={activity}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
            className='cursor-default transition-opacity hover:opacity-70'
          />
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount className='text-muted-foreground text-xs' />
        <ContributionGraphLegend className='text-xs' />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}
