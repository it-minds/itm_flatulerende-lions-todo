import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./../../styles/components/modal.css";
type Modal = {
	isOpen: boolean;
	onClose: () => void;
	children: JSX.Element;
	parentId?: string;
	className?: string;
};

type Backdrop = {
	onClose?: () => void;
};

type Overlay = {
	children: JSX.Element;
	className?: string;
	bodyText?: JSX.Element;
};

const Modal: FC<Modal> = (props) => {
	let portalElement: HTMLElement | null = null;

	const [mounted, setMounted] = React.useState(false);
	useEffect(() => {
		/*eslint-disable */
		setMounted(true);
		// If parentId has been set, use that element as the root
		portalElement = document.getElementById(
			props.parentId ? props.parentId : "modal-root"
		);
		/*eslint-enable */
		return () => {
			setMounted(false);
		};
	}, []);

	// mounted probably only necessary for ssr
	if (props.isOpen && mounted) {
		return (
			<>
				{createPortal(
					<Backdrop onClose={props.onClose} />,
					// If portalElement is falsy (null), use document.body as the root
					portalElement
						? portalElement
						: document.getElementById("modal-root") || document.body
				)}
				{createPortal(
					<Overlay className={props.className}>{props.children}</Overlay>,
					portalElement
						? portalElement
						: document.getElementById("modal-root") || document.body
				)}
			</>
		);
	} else return null;
};

const Backdrop: FC<Backdrop> = (props) => {
	return (
		// className="fixed top-0 left-0 w-full h-full z-20 bg-black opacity-75"
		<div className="backdrop" onClick={props.onClose} />
	);
};

const Overlay: FC<Overlay> = (props) => {
	return (
		<div className={`modal ${props.className}`}>
			{props.children || props.bodyText || "No Text Has Been Set"}
		</div>
	);
};

export default Modal;
