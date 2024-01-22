type ConditionsType = {
  [condition: string]: boolean;
};

export const generateClassNames = (
  baseClassName: string,
  conditions: ConditionsType
) => {
  const classNames = [baseClassName];

  for (const [condition, isTrue] of Object.entries(conditions)) {
    if (isTrue) {
      classNames.push(condition);
    }
  }

  return classNames.join(" ");
};
