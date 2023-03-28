export const textHoverFocus = (colour) => {
	switch (colour) {
		case "#E9BF5E":
			return "hover:text-theme-yellow focus-visible:text-theme-yellow focus:outline-none";
		case "#D4E1E3":
			return "hover:text-theme-blue focus-visible:text-theme-blue focus:outline-none";
		case "#B2B293":
			return "hover:text-theme-green focus-visible:text-theme-green focus:outline-none";
		case "#A5979A":
			return "hover:text-theme-purple focus-visible:text-theme-purple focus:outline-none";
		case "#E5D2E0":
			return "hover:text-theme-pink focus-visible:text-theme-pink focus:outline-none";
		default:
			return "hover:text-theme-yellow focus-visible:text-theme-yellow focus:outline-none";
	}
};
