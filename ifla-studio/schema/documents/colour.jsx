import { defineType, defineField } from "sanity";
import { Icons } from "../../styles/SanityIcons";
import { AccessibleColourInput } from "../../components/AccessibleColourInput";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: 'colour',
  title: 'Colour',
  type: 'document',
  icon: Icons.colour,
  fields: [
    orderRankField({type: 'colour'}),
    defineField({
      name: 'colourLightName',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'colourLight',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {type: '#000000', nameField: 'colourLightName'},
    }),
    defineField({
      name: 'colourDarkName',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'colourDark',
      type: 'string',
      components: {
        input: AccessibleColourInput,
      },
      options: {type: '#ffffff', defaultColour: '#000000', nameField: 'colourDarkName'},
    }),
  ],
  preview: {
    select: {
      colourLight: 'colourLight',
      colourDark: 'colourDark',
      colourLightName: 'colourLightName',
      colourDarkName: 'colourDarkName',
    },
    prepare({colourLight, colourDark, colourLightName, colourDarkName}) {
      return {
        title: `${colourLightName} + ${colourDarkName}`,
        // subtitle: `${colourLight} + ${colourDark}`,
        media: (
          <div
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              background: colourLight,
            }}
          >
            <div
              style={{
                position: 'absolute',
                height: '100%',
                width: '50%',
                bottom: 0,
                right: 0,
                background: colourDark,
              }}
            ></div>
            {/* <div
							style={{ height: "100%", width: "50%", background: colourLight }}
						></div>
						<div style={{ height: "100%", width: "50%", background: colourDark }}></div> */}
          </div>
        ),
      }
    },
  },
})
