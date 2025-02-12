import { HelperObject as HelperBase } from "../objects/helper";

export class Helper extends HelperBase {
  static type = "Helper";

  constructor(props: any) {
    props.activeGuideFill = "#ffffff";
    super(props);
  }
}
