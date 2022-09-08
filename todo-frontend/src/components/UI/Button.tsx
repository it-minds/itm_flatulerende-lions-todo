import React, { FC } from "react";

type Props = {
	children: React.ReactNode | string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
};

const Button: FC<Props> = ({ children, onClick, className, disabled }) => {
	return (
		<button
			disabled={disabled}
			className={"btn" + " " + className}
			onClick={() => onClick()}
		>
			{children}
		</button>
	);
};

export default Button;
