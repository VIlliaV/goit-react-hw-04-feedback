import { List } from "./Statistics.styled";

export const Statistics = ({
  statisticsData: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>Good:<span> {good}</span></li>
      <li>Neutral:<span> {neutral}</span></li>
      <li>Bad:<span> {bad}</span></li>
      <li>Total:<span> {total()}</span></li>
      <li>Positive<span> feedback: {positivePercentage()}%</span></li>
    </List>
  );
};
