import Scrollbars from "react-custom-scrollbars"
import { default as ReactMasonry } from "react-masonry-css";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, CardActionArea, Typography } from "@mui/material";
import Document, { DocumentAdd } from "./Document";
function Masonry() {


    return (
        <Scrollbars>
            <ReactMasonry
                breakpointCols={{
                    default: 4,
                    1400: 3,
                    1000: 2,
                    600: 1
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <DocumentAdd />
                {
                    Array.from(Array(20).keys()).map((i) => <Document title="Lorem Ipsum" text="Aliquam in metus nec nisl commodo tempor. Nam posuere vel sapien sit amet vulputate. Nulla convallis sollicitudin nibh non fermentum. Pellentesque in mattis libero. Fusce a ipsum nec ipsum cursus commodo non at purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ornare turpis ut neque pretium sodales." />)
                }
            </ReactMasonry>
        </Scrollbars>
    )
}

export default Masonry