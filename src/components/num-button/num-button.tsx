type TNumButtonProps = {
  value: number;
};

export const NumButton = ({ value }: TNumButtonProps) => {
  return (
    <div>
      <p>{value}</p>
    </div>
  );
};
