export const onValidateEmail = (email) => {
  const re =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export function numberFormatter(x) {
  if (x !== null && x !== undefined) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return x;
}
