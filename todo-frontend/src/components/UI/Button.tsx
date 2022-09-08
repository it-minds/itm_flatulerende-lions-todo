import React, { FC } from "react";

type Props = {
	children: React.ReactNode | string;
	onClick: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
	return (
		<button
			className="btn"
			onClick={() => onClick()}
		>
			Open modal
		</button>
	);
};

export default Button;
