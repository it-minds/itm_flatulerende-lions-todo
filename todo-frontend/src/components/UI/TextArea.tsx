import React, { FC } from "react";

type Props = {
	children?: React.ReactNode | string;
	placeholder?: string;
	id: string;
	label: string;
	onClick?: () => void;
	onInput: (event: React.FormEvent<HTMLTextAreaElement>) => void;
	className?: string;
	value?: string;
};

const TextArea: FC<Props> = ({
	children,
	onClick,
	id,
	label,
	placeholder,
	className,
	onInput,
	value,
}) => {
	return (
		<div className="flex flex-col">
			<label className="label" htmlFor={id}>
				{label}
			</label>
			<textarea
				className={"input resize-none " + " " + className}
				id={id}
				placeholder={placeholder}
				onInput={(e) => onInput(e)}
				value={value}
			/>
		</div>
	);
};

export default TextArea;
