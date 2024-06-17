const ButtonPrimary = ({ children, items, actions }) => {
  return (
    <button
      type="submit"
      title={items.title}
      onClick={actions}
      className={"btn btn-success " + items.btn_class}
    >
      {children}
    </button>
  );
};

const ButtonSecondary = ({ children, items, actions }) => {
  return (
    <button
      type="submit"
      title={items.title}
      onClick={actions}
      className={"btn btn-success " + items.btn_class}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary };
