export const mapTestIdToProps = (testId: string | undefined) => {
  return {
    ...(testId && {
      'data-testid': testId,
    }),
  }
}
