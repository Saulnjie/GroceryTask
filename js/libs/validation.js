export const testLengthOfInput = function (
	valueFromGroceryBox,
	lengthIWouldLikeItToBe
) {
	if (valueFromGroceryBox.length >= lengthIWouldLikeItToBe) {
		return true;
	} else {
		return false;
	}
};
