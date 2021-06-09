const Header = (props: { title: string }) => {
  return (
    <div className="flex justify-center items-center my-4 dark:text-white">
      <h1 className="font-playfair text-4xl sm:text-6xl font-bold">
        {props.title}
      </h1>
    </div>
  );
};

export default Header;
