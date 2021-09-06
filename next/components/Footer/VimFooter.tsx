import React, { useEffect, useState } from 'react';
import { styled } from '../../styles/stitches.config';

const VimFooter = () => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      document.body.contentEditable = 'false';
      document.designMode = 'off';
    } else {
      document.body.contentEditable = 'true';
      document.designMode = 'on';
    }
  }, [isEditing]);

  return (
    <Footer>
      <Section>
        <Mode>
          <ModeLabel>
            <ModeInput
              type="checkbox"
              onClick={() => {
                setIsEditing((previousValue) => !previousValue);
              }}
              isEditing={isEditing}
            />
            <ModeText>{!isEditing ? 'NORMAL' : 'INSERT'}</ModeText>
          </ModeLabel>
        </Mode>
        <OptionalText>pham.html</OptionalText>
      </Section>
      <EndSection>
        <Text>Last Updated: 09/05/2021</Text>
      </EndSection>
    </Footer>
  );
};

export default VimFooter;

const Footer = styled('footer', {
  height: '$s32',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  bottom: '0',
  background: '$secondaryBackground',
  color: '$textPrimary',
});

const Mode = styled('div', {
  height: '$s32',
  width: '100px',
});

const ModeLabel = styled('label', {
  cursor: 'pointer',
  position: 'relative',
  padding: '$s8 $s24',
  color: '$textPrimary',
  display: 'grid',
  height: 'inherit',
  width: '100px',
});

const ModeInput = styled('input', {
  background: '$secondaryAccent',
  cursor: 'inherit',
  position: 'absolute',
  margin: '0',
  height: '100%',
  width: '100px',
  appearance: 'none',
  zIndex: '-1',
  variants: {
    isEditing: {
      true: {
        background: '$alert',
      },
    },
  },
});

const Text = styled('p', {
  margin: 0,
  padding: '$s8 $s24',
  whiteSpace: 'nowrap',
});

const ModeText = styled(Text, {
  width: '100px',
  margin: '0',
  padding: 'unset',
  position: 'absolute',
  left: 0,
  textAlign: 'center',
  top: '5px',
  whiteSpace: 'normal',
});

const OptionalText = styled(Text, {
  display: 'none',

  '@bp1': {
    display: 'block',
  },
});

const Section = styled('section', {
  margin: '0',
  height: '$s32',
  display: 'flex',
  alignItems: 'center',
});

const EndSection = styled(Section, {
  marginLeft: 'auto',
});
