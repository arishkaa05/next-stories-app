import { getAllStories } from '@/entities/story/api';
import { StoryItem } from '@/entities/story/types';
import { Container, StoryCard, Title } from '@/shared/components';
import { PaginationDto } from '@/shared/types/pagination';

export default async function StoriesPage() {
  const storiesData: PaginationDto<StoryItem> = await getAllStories();

  return (
    <>
      <Container className="mt-10">
        <Title text="Все истории" size="md" className="font-bold" />
      </Container>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Список историй */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storiesData.items.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
