function foo() {
	var x;
	await x = bar();
	await bar();
	var y = bar();
	await y;
}
