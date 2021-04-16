export const mapTestIdToProps = (testId: string) => {
  return {
    ...(testId && {
      'data-testid': testId,
    }),
  }
}
