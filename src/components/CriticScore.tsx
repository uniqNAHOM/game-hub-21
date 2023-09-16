import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color =
    score > 80 ? "green" : score > 60 ? "yellow" : score > 40 ? "red" : "";
  return (
    <Badge fontSize="14px" paddingX={3} borderRadius={3} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
