interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <div onClick={onClick} className="company-action-btn">
      <span>{label}</span>
    </div>
  );
};

export default Button;
