import React from "react";
import Emoji from "a11y-react-emoji";

const documentIcons = [
  {name: 'home', emoji: '🏠'},
  {name: 'content', emoji: '🌍'},
  {name: 'article', emoji: '📣'},
  {name: 'filtered', emoji: '⏳'},
  {name: 'section', emoji: '🚧'},
  {name: 'page', emoji: '📄'},
  {name: 'colour', emoji: '🌈'},
  {name: 'author', emoji: '👤'},
  {name: 'topic', emoji: '⭐️'},
  {name: 'category', emoji: '🔮'},
  {name: 'product', emoji: '🛍️'},
  {name: 'collection', emoji: '📦'},
  {name: 'variant', emoji: '🚦'},
  {name: 'settings', emoji: '⚙️'},
]

const filterIcons = [
	{ name: "year", emoji: "⏰" },
];

const objectIcons = [
	{ name: "hero", emoji: "💥" },
	// { name: "link", emoji: "🔗" },
];

const createLargeIcons = [...documentIcons, ...filterIcons, ...objectIcons].map((icon) => {
	return {
		[icon.name]: <Emoji style={{ fontSize: "2rem" }} symbol={icon.emoji} />,
	};
});

const createSmallIcons = [...documentIcons, ...filterIcons, ...objectIcons].map((icon) => {
	return {
		[icon.name]: <Emoji style={{ fontSize: "1rem" }} symbol={icon.emoji} />,
	};
});

export const Icons = Object.assign(...createLargeIcons);
export const IconsSmall = Object.assign(...createSmallIcons);
