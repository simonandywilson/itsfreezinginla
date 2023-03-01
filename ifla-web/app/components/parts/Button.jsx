import { cx } from 'class-variance-authority';

const Button = ({type, className, children}) => {
  return (
    <button
      type={type || 'submit'}
      className={cx(
        'bg-white text-black p-2 focus-visible:bg-zinc-300 focus:outline-none hover:bg-zinc-300',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
