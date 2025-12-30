import React from 'react';
import { Card } from '../molecules';
import { Button } from '../atoms';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeaturesGridProps {
  features: Feature[];
  onFeatureClick?: (index: number) => void;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, onFeatureClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card key={index} title={feature.title} description={feature.description}>
          {onFeatureClick && (
            <Button onClick={() => onFeatureClick(index)} variant="outline" size="sm">
              Learn More
            </Button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FeaturesGrid;
