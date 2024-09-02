// CODE

let type = "button" as const;

// TESTS

type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const buttonAttributes: ButtonAttributes = {
  type,
};
