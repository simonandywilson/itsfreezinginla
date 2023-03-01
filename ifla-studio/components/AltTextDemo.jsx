import {
	Flex,
	Button,
	Dialog,
	Box,
	Badge,
	Card,
	TabList,
	TabPanel,
	Tab,
	Text,
	Stack,
	Inline,
} from "@sanity/ui";
import { useCallback, useState } from "react";
import { HelpCircleIcon } from "@sanity/icons";

export const AltTextDemo = (props) => {
	const { renderDefault } = props;
	const [open, setOpen] = useState(false);
	const [id, setId] = useState("info");
	const onClose = useCallback(() => setOpen(false), []);
	const onOpen = useCallback(() => setOpen(true), []);
	return (
		<>
			<Flex gap={1}>
				<div style={{ flex: 1 }}>{renderDefault(props)}</div>
				<Button tone={"primary"} icon={HelpCircleIcon} onClick={onOpen} />
			</Flex>
			{open && (
				<Dialog header="Alternative Text" id="alt-text" onClose={onClose} zOffset={1000}>
					<Box padding={2}>
						<TabList space={2}>
							<Tab
								aria-controls="info-panel"
								id="info-tab"
								label="Info"
								onClick={() => setId("info")}
								selected={id === "info"}
								space={2}
							/>
							<Tab
								aria-controls="example-1-panel"
								id="example-1-tab"
								label="Example 1"
								onClick={() => setId("example-1")}
								selected={id === "example-1"}
								space={2}
							/>
							<Tab
								aria-controls="example-2-panel"
								id="example-2-tab"
								label="Example 2"
								onClick={() => setId("example-2")}
								selected={id === "example-2"}
								space={2}
							/>
						</TabList>
					</Box>
					<TabPanel aria-labelledby="info-tab" hidden={id !== "info"} id="info-panel">
						<Card borderTop={true} padding={4} radius={0} marginTop={2}>
							<Stack space={3}>
								<Text size={1} weight={"semibold"}>
									Alternative Text (Alt Text) describes the appearance or function
									of an image on a page. Alt Text is read aloud by screen readers
									used by visually impaired users, displays in place of an image
									if it fails to load and is indexed by search engine bots to
									better understand the content of your page.
								</Text>
							</Stack>
						</Card>
					</TabPanel>

					<TabPanel
						aria-labelledby="example-1-tab"
						hidden={id !== "example-1"}
						id="example-1-panel"
					>
						<Card borderTop={true} padding={4} radius={0}>
							<Stack space={3}>
								<Flex>
									<img
										src={"https://picsum.photos/id/27/800/500"}
										style={{
											width: "200px",
											aspectRatio: "1 / 1",
											borderRadius: "5px",
											objectFit: "cover",
											objectPosition: "0% 50%",
										}}
									/>
								</Flex>
								<Inline>
									<Badge mode="outline">Example alt text</Badge>
								</Inline>
								<Text size={1} weight={"semibold"}>
									Photograph of person standing on seashore while holding a
									fishing rod
								</Text>
							</Stack>
						</Card>
					</TabPanel>
					<TabPanel
						aria-labelledby="example-2-tab"
						hidden={id !== "example-2"}
						id="example-2-panel"
					>
						<Card borderTop={true} padding={4} radius={0}>
							<Stack space={3}>
								<Flex>
									<img
										src={"https://picsum.photos/id/701/500/500"}
										style={{
											width: "200px",
											aspectRatio: "1 / 1",
											borderRadius: "5px",
										}}
									/>
								</Flex>
								<Inline>
									<Badge mode="outline">Example alt text</Badge>
								</Inline>
								<Text size={1} weight={"semibold"}>
									Field of sapphire blue snapdragon (Antirrhinum) flowers with
									clouds in background
								</Text>
							</Stack>
						</Card>
					</TabPanel>
				</Dialog>
			)}
		</>
	);
};
