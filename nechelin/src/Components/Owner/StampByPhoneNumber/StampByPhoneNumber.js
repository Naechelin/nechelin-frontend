import React, {Component} from "react";
import "./StampByPhoneNumber.css";

class StampByPhoneNumber extends Component {
	render() {
		return (
			<div className="StampByPhoneNumber">
				<input type="number" readOnly></input>
				<br />
				<div className="keyPad">
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<br />
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<br />
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<br />
					<button>*</button>
					<button>0</button>
					<button>#</button>
					<br />
				</div>

				<div className="confirmButtons">
					<button>취소</button>
					<button>확인</button>
				</div>
			</div>
		);
	}
}

export default StampByPhoneNumber;
