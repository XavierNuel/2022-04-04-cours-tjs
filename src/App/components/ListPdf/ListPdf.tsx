import React from "react";
import style from "./ListPdf.module.scss";
import { connect } from "react-redux";
import { I_Image, I_Meme } from "../../interfaces/common";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import MemeSvgViewerPDF from "./MemeSvgViewerPDF/MemeSvgViewerPDF";

//import { Document, Page, } from "@react-pdf/renderer"

interface I_ListPdfProps {
  memes: Array<I_Meme>;
  images: Array<I_Image>;
}
const ListPdf: React.FC<I_ListPdfProps> = (props) => {
  return (
    <div className={style.ListPdf} data-testid="ListPdf">
      <PDFDownloadLink
        document={<DocumentPDF memes={props.memes} images={props.images} />}
        fileName="memes.pdf"
      >
        Liens de DL
      </PDFDownloadLink>
      <br />
      <PDFViewer showToolbar={true}>
        <DocumentPDF memes={props.memes} images={props.images} />
      </PDFViewer>
    </div>
  );
};

function mapStateToProps(storeState: any, ownProps: any) {
  return {
    ...ownProps,
    ...storeState.ressources, // on prend toutes les ressources de store
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPdf);
export const unConnectedListPdf = ListPdf;

interface I_PDFDocumentProps {
  memes: Array<I_Meme>;
  images: Array<I_Image>;
}

const DocumentPDF: React.FC<I_PDFDocumentProps> = (props) => {
  return (
    <Document>
      <Page size={"A4"}>
        {props.memes.map((m, i) => {
          const image = props.images.find((img) => img.id === m.imageId);

          return (
            <View key={"view-pdf-" + i}>
              <Text>
                <h3>
                  {m.id} : {m.titre}
                </h3>
              </Text>
              <Svg
                viewBox={`0 0 ${image ? image.w : 1000} ${
                  image ? image.h : 1000
                }`}
              >
                <MemeSvgViewerPDF meme={m} image={image} />
              </Svg>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};
