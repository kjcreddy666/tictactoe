import "./index.css"
import { Box } from '../Box';

const Square = (props) => {
    const boxes = props.boxesState.map((box, index) => (
        <Box key={index} onClick={() => props.handleOnclick(index)} className={box.className}>
            {box.text}
        </Box>
    ));

    return (
        <div className="square">
            {boxes}
        </div>
    );
}
export  {Square};