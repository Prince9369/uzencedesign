import React from 'react';

type ColorCategory = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'success' | 'info' | 'warning' | 'error';
type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
type SurfaceType = 'light' | 'dark';
type BackgroundType = 'light' | 'dark';

interface ColorSwatchProps {
  category: ColorCategory;
  shade?: ColorShade;
  label?: string;
  showHex?: boolean;
}

interface SurfaceSwatchProps {
  type: SurfaceType;
  label?: string;
  showHex?: boolean;
}

interface BackgroundSwatchProps {
  type: BackgroundType;
  label?: string;
  showHex?: boolean;
}

const getColorVar = (category: ColorCategory, shade?: ColorShade): string => {
  if (shade) {
    return `var(--color-${category}-${shade})`;
  }
  return `var(--color-${category}-500)`;
};

const getSurfaceVar = (type: SurfaceType): string => {
  return `var(--color-surface-${type})`;
};

const getBackgroundVar = (type: BackgroundType): string => {
  return `var(--color-background-${type})`;
};

const getContrastColor = (backgroundColor: string): string => {
  // This is a simplified version. In a real app, you'd calculate contrast
  // based on the actual color values.
  if (backgroundColor.includes('50') ||
      backgroundColor.includes('100') ||
      backgroundColor.includes('200') ||
      backgroundColor.includes('light')) {
    return 'var(--color-neutral-900)';
  }
  return 'var(--color-neutral-50)';
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  category,
  shade = '500',
  label,
  showHex = false
}) => {
  const colorVar = getColorVar(category, shade);
  const textColor = getContrastColor(`${category}-${shade}`);

  // Get a user-friendly representation of the color
  const getDisplayColor = () => {
    // For a real app, you would compute the actual hex value
    // This is a simplified version that shows a more user-friendly format
    return `#${category.charAt(0)}${shade}`;
  };

  return (
    <div
      className="w-full h-20 rounded-md flex flex-col justify-between p-3"
      style={{ backgroundColor: colorVar, color: textColor }}
    >
      <div className="text-sm font-medium">
        {label || `${category}-${shade}`}
      </div>
      {showHex && (
        <div className="text-xs opacity-80">
          {getDisplayColor()}
        </div>
      )}
    </div>
  );
};

export const SurfaceSwatch: React.FC<SurfaceSwatchProps> = ({
  type,
  label,
  showHex = false
}) => {
  const surfaceVar = getSurfaceVar(type);
  const textColor = type === 'light' ? 'var(--color-neutral-900)' : 'var(--color-neutral-50)';

  // Get a user-friendly representation of the color
  const getDisplayColor = () => {
    return type === 'light' ? '#FFFFFF' : '#121212';
  };

  return (
    <div
      className="w-full h-20 rounded-md flex flex-col justify-between p-3"
      style={{ backgroundColor: surfaceVar, color: textColor }}
    >
      <div className="text-sm font-medium">
        {label || `Surface ${type}`}
      </div>
      {showHex && (
        <div className="text-xs opacity-80">
          {getDisplayColor()}
        </div>
      )}
    </div>
  );
};

export const BackgroundSwatch: React.FC<BackgroundSwatchProps> = ({
  type,
  label,
  showHex = false
}) => {
  const backgroundVar = getBackgroundVar(type);
  const textColor = type === 'light' ? 'var(--color-neutral-900)' : 'var(--color-neutral-50)';

  // Get a user-friendly representation of the color
  const getDisplayColor = () => {
    return type === 'light' ? '#F8FAFC' : '#0F172A';
  };

  return (
    <div
      className="w-full h-20 rounded-md flex flex-col justify-between p-3"
      style={{ backgroundColor: backgroundVar, color: textColor }}
    >
      <div className="text-sm font-medium">
        {label || `Background ${type}`}
      </div>
      {showHex && (
        <div className="text-xs opacity-80">
          {getDisplayColor()}
        </div>
      )}
    </div>
  );
};

export const ColorPalette: React.FC<{ category: ColorCategory, showHex?: boolean }> = ({
  category,
  showHex = false
}) => {
  const shades: ColorShade[] = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold capitalize">{category}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {shades.map(shade => (
          <ColorSwatch
            key={`${category}-${shade}`}
            category={category}
            shade={shade}
            showHex={showHex}
          />
        ))}
      </div>
    </div>
  );
};

export const SemanticColorPalette: React.FC<{ showHex?: boolean }> = ({ showHex = false }) => {
  const semanticCategories: ColorCategory[] = ['success', 'info', 'warning', 'error'];
  const semanticShades: ColorShade[] = ['50', '100', '500', '700', '900'];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Semantic Colors</h3>
      {semanticCategories.map(category => (
        <div key={category} className="space-y-2">
          <h4 className="text-md font-medium capitalize">{category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {semanticShades.map(shade => (
              <ColorSwatch
                key={`${category}-${shade}`}
                category={category}
                shade={shade}
                showHex={showHex}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const SurfacePalette: React.FC<{ showHex?: boolean }> = ({ showHex = false }) => {
  const surfaceTypes: SurfaceType[] = ['light', 'dark'];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Surfaces</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {surfaceTypes.map(type => (
          <SurfaceSwatch
            key={`surface-${type}`}
            type={type}
            showHex={showHex}
          />
        ))}
      </div>
    </div>
  );
};

export const BackgroundPalette: React.FC<{ showHex?: boolean }> = ({ showHex = false }) => {
  const backgroundTypes: BackgroundType[] = ['light', 'dark'];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Backgrounds</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {backgroundTypes.map(type => (
          <BackgroundSwatch
            key={`background-${type}`}
            type={type}
            showHex={showHex}
          />
        ))}
      </div>
    </div>
  );
};

export const ColorSystem: React.FC<{ showHex?: boolean }> = ({ showHex = false }) => {
  const mainCategories: ColorCategory[] = ['primary', 'secondary', 'tertiary', 'neutral'];

  return (
    <div className="space-y-8 p-4">
      {mainCategories.map(category => (
        <ColorPalette key={category} category={category} showHex={showHex} />
      ))}
      <SemanticColorPalette showHex={showHex} />
      <SurfacePalette showHex={showHex} />
      <BackgroundPalette showHex={showHex} />
    </div>
  );
};

export default ColorSystem;
