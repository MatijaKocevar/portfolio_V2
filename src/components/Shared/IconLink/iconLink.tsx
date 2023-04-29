import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";

export const GitHubLink = (props: { href: string }) => {
	return (
		<a className='icon-link' href={props.href} target='_blank' rel='noopener noreferrer'>
			<FaGithub />
		</a>
	);
};

export const LinkedinLink = (props: { href: string }) => {
	return (
		<a className='icon-link' href={props.href} target='_blank' rel='noopener noreferrer'>
			<FaLinkedin />
		</a>
	);
};
