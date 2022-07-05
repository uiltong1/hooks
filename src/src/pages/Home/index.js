import HookUseCallback from "../../components/HookUseCallback";
import HookUseCustom from "../../components/HookUseCustom";
import HookUseEffect from "../../components/HookUseEffect";
import HookUseImperativeHandle from "../../components/HookUseImperativeHandle";
import HookUseLayoutEffect from "../../components/HookUseLayoutEffect";
import HookUseMemo from "../../components/HookUseMemo";
import HookUseReducer from "../../components/HookUseReducer";
import HookUseRef from "../../components/HookUseRef";
import HookUseState from "../../components/HookUseState";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookUseCustom />
    </div>
  );
};

export default Home;
