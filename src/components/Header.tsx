const Header = (props: { title: string }) => {
  return (
    <div className="container flex justify-center items-center my-4">
      <h1 className="font-playfair text-6xl font-bold">{props.title}</h1>
    </div>
  );
};

export default Header;
