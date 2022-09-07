import React, { FC } from "react";

type Props = {
	children: React.ReactNode | string;
	onClick: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
	return (
		<button
			className="w-32 h-16 bg-light-blue text-slate-600 rounded-lg text-lg font-medium"
			onClick={() => onClick()}
		>
			Open modal
		</button>
	);
};

export default Button;
