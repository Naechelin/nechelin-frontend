import React, {PureComponent} from "react";
import Store from "../../Common/Store/Store";
class MyStore extends PureComponent {
	render() {
		return (
			<div className="MyStore">
				<Store />
			</div>
		);
	}
}

export default MyStore;
