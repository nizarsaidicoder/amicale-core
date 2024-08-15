import "../sass/index.scss";

type ButtonProps = {
    type: string;
    children: React.ReactNode;
};

function Button({ type, children }: ButtonProps) {
    return <button className={`button button--${type}`}>{children}</button>;
}

export default Button;
