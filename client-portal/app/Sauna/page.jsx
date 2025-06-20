import SaunaPage from "./saunaPage"; // moved actual component to a new file
import SaunaWrapper from "./Wrapper";

export default function Page() {
  return (
    <SaunaWrapper>
      <SaunaPage />
    </SaunaWrapper>
  );
}
