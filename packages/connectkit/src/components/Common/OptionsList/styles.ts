import styled from "../../../styles/styled";
import { css } from "styled-components";

import { motion } from "framer-motion";

export const OptionButton = styled(motion.button)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  font-size: 17px;
  font-weight: var(--ck-primary-button-font-weight, 500);
  line-height: 20px;
  text-align: var(--ck-body-button-text-align, left);
  transition: 180ms ease;
  transition-property: background, color, box-shadow, transform, opacity;
  will-change: transform, box-shadow, background-color, color, opacity;

  --fallback-color: var(--ck-primary-button-color);
  --fallback-background: var(--ck-primary-button-background);
  --fallback-box-shadow: var(--ck-primary-button-box-shadow);
  --fallback-border-radius: var(--ck-primary-button-border-radius);

  --color: var(--ck-primary-button-color, var(--fallback-color));
  --background: var(--ck-primary-button-background, var(--fallback-background));
  --box-shadow: var(--ck-primary-button-box-shadow, var(--fallback-box-shadow));
  --border-radius: var(
    --ck-primary-button-border-radius,
    var(--fallback-border-radius)
  );

  --hover-color: var(--ck-primary-button-hover-color, var(--color));
  --hover-background: var(
    --ck-primary-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );

  --active-color: var(--ck-primary-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-primary-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-primary-button-active-box-shadow,
    var(--hover-box-shadow)
  );
  --active-border-radius: var(
    --ck-primary-button-active-border-radius,
    var(--hover-border-radius)
  );

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &:disabled {
    transition: 180ms ease;
    opacity: 0.4;
  }

  --bg: var(--background);
  &:not(:disabled) {
    &:hover {
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
      --bg: var(--hover-background, var(--background));
    }
    &:focus-visible {
      transition-duration: 100ms;
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
      --bg: var(--hover-background, var(--background));
    }
    &:active {
      color: var(--active-color);
      background: var(--active-background);
      box-shadow: var(--active-box-shadow);
      border-radius: var(--active-border-radius);
      --bg: var(--active-background, var(--background));
    }
  }
`;

export const OptionLabel = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
  overflow: hidden;
  padding: 2px 0;
  padding-right: 38px;
`;

export const OptionTitle = styled(motion.span)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const OptionSubtitle = styled(motion.span)`
  font-size: 14px;
  opacity: 0.6;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const OptionIcon = styled(motion.div)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  svg,
  img {
    display: block;
    position: relative;
    pointer-events: none;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &[data-shape="squircle"] {
    border-radius: 22.5%;
  }
  &[data-shape="circle"] {
    border-radius: 100%;
  }
  &[data-shape="square"] {
    border-radius: 0;
  }
`;

export const OptionsContainer = styled.div<{
  $disabled?: boolean;
}>`
  transition: opacity 300ms ease;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
`;
