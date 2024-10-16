import {
  OptionIcon,
  OptionButton,
  OptionLabel,
  OptionTitle,
  OptionSubtitle,
  OptionsContainer,
} from "./styles";
import { ScrollArea } from "../ScrollArea";
import styled from "../../../styles/styled";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";
import { useEffect } from "react";
import { useContext } from "../../ConnectKit";

interface Option {
  id: string;
  title: string;
  subtitle?: string;
  icons: (React.ReactNode | string)[];
  onClick: () => void;
}

const OptionsList = ({
  options,
  isLoading,
  requiredSkeletons,
}: {
  options: Option[];
  isLoading?: boolean;
  requiredSkeletons?: number;
}) => {
  const { triggerResize } = useContext();
  const optionsLength = options.length;

  useEffect(() => {
    console.log(`[OPTIONS RESIZE]: ${optionsLength}, triggering resize`);
    if (optionsLength > 0) {
      triggerResize();
    }
  }, [optionsLength]);

  if (isLoading) {
    const skeletonCount = requiredSkeletons
      ? Math.max(requiredSkeletons - optionsLength, 0)
      : 0;

    return (
      <OptionsContainer $totalResults={options.length}>
        {options.map((option) => (
          <OptionItem key={option.id} option={option} />
        ))}
        {isLoading &&
          Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonOptionItem key={index} />
          ))}
      </OptionsContainer>
    );
  }

  return (
    <ScrollArea mobileDirection={"vertical"} height={300}>
      <OptionsContainer $totalResults={options.length}>
        {options.map((option) => (
          <OptionItem key={option.id} option={option} />
        ))}
      </OptionsContainer>
    </ScrollArea>
  );
};

export default OptionsList;

const SkeletonOptionItem = () => {
  return (
    <OptionButton type="button">
      <SkeletonIcon />
      <SkeletonLabel />
    </OptionButton>
  );
};

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const SkeletonIcon = styled.div`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  border-radius: 22.5%;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonLabel = styled.div`
  width: 100px;
  height: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const OptionItem = ({ option }: { option: Option }) => {
  const hydratedIcons = option.icons.map((icon) => {
    if (typeof icon === "string") {
      return <img src={icon} alt="" />;
    }
    return icon;
  });

  const iconContent = (() => {
    if (hydratedIcons.length === 1)
      return <OptionIcon>{hydratedIcons[0]}</OptionIcon>;
    else {
      return (
        <IconStackContainer>
          {hydratedIcons.map((icon, index) => (
            <IconStackItem
              key={index}
              $marginRight={index !== hydratedIcons.length - 1 ? -12 : 0}
              $zIndex={hydratedIcons.length - index}
            >
              {icon}
            </IconStackItem>
          ))}
        </IconStackContainer>
      );
    }
  })();

  return (
    <OptionButton type="button" onClick={option.onClick}>
      {iconContent}
      <OptionLabel>
        <OptionTitle>{option.title}</OptionTitle>
        {option.subtitle && <OptionSubtitle>{option.subtitle}</OptionSubtitle>}
      </OptionLabel>
    </OptionButton>
  );
};

const IconStackContainer = styled(motion.div)`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconStackItem = styled(motion.div)<{
  $marginRight?: number;
  $zIndex?: number;
}>`
  display: block;
  overflow: hidden;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.$marginRight || 0}px;
  z-index: ${(props) => props.$zIndex || 2};
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
  border-radius: 22.5%;
`;
