import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { StoryItem } from '@/entities/story/types';
import { formatDate } from '@/shared/utils/formatDate';

interface Props {
  story: StoryItem;
}

export const StoryCard: React.FC<Props> = ({ story }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Link href={`/story/${story.id}`}>
        <Title text={story.title} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400 mb-4">{story.text}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xs">{formatDate(story.createdAt)}</span>
        </div>
      </Link>
    </div>
  );
};
