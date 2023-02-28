
import { useDocumentOperation } from "sanity";

export function SetRandomColourAction(originalAction, context) {
	const client = context.getClient({ apiVersion: "2022-11-29" });

	const AsyncPublishAction = (props) => {
		const originalResult = originalAction(props);
		const { patch, publish } = useDocumentOperation(props.id, props.type);

		return {
			...originalResult,
			onHandle: async () => {
				const query = `
         			*[_type == 'colour'] {
				  		_id,
				  		'totalReferences': count(*[_type in ['article'] && references(^._id)])
					} | order(_createdAt asc) | order(totalReferences asc) [0]`;
				
				const leastUsedColour = await client.fetch(query);

				patch.execute([
					{
						setIfMissing: {
							colour: {
								_type: "reference",
								_ref: leastUsedColour._id,
							},
						},
					},
				]);
				publish.execute();
				props.onComplete();
			},
		};
	};
	return AsyncPublishAction;
}
