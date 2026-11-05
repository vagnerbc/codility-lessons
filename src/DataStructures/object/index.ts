const newObj = {};

const newObjWithValues = {
  name: "Vagner",
  age: 36,
  internal: {
    address: "address",
  },
};

const newObjWithNew = new Object({
  name: "Vagner",
});

const newObjWithNew2 = new Object(newObjWithValues);

const copy1 = { ...newObjWithValues };
const copy2 = Object.assign({}, newObjWithValues);
const copy3 = structuredClone(newObjWithValues);

newObjWithValues.age = 37;
newObjWithValues.internal.address = "updated";

console.log({
  newObj,
  newObjWithValues,
  newObjWithNew,
  newObjWithNew2,
  copy1,
  copy2,
  copy3,
});

for (const key of Object.keys(newObjWithValues)) {
  console.log({ key });
}

for (const value of Object.values(newObjWithValues)) {
  console.log({ value });
}

for (const entries of Object.entries(newObjWithValues)) {
  console.log({ entries });
}
