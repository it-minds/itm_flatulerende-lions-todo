import React, { FC } from "react";

type Props = {
	children: React.ReactNode | string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
};

const Button: FC<Props> = ({ children, onClick, className, disabled }) => {
	if (!disabled) {
		return (
			<button className={`btn ${className}`} onClick={() => onClick()}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				disabled
				className={`btn-disabled ${className}`}
				onClick={() => onClick()}
			>
				{children}
			</button>
		);
	}
};
export default Button;
