class Logger {
	constructor(shellPrompt = '|> ') {
		this.shellPrompt = shellPrompt;
	}
	
	log(msg) {
		let shellMessage = `${this.shellPrompt} ${msg}`;
		
		console.log(msg);
	}
}

export default Logger;