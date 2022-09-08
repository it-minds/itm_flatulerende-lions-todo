import React, { FC } from "react";

type Props = {
	children: React.ReactNode | string;
	onClick: () => void;
	id: string;
	label: string;
	className: string;
};

const TextArea: FC<Props> = ({ children, onClick, id, label, className }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<textarea
				className={
					"resize-none text-base p-2 border-none box-border rounded-md text-brown-gray focus:bg-off-white-focus" +
					" " +
					className
				}
				id={id}
			>
				Hello
			</textarea>
		</>
	);
};

export default TextArea;
