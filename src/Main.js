import Button from "./Button";
import { FlexboxGrid, Divider } from "rsuite";

let styleObj = {
  display: "block",
  height: "40px"
};

const Main = () => {
  console.log("Main");
  return (
    <div>
      <h4>Buttons</h4> <br />
      <div className="show-grid">
        <b> Normal </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}> {`<Button />`} </small>
            <Button />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>{`<Button variant="outline" />`}</small>
            <Button variant="outline" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}> {`<Button variant="text" />`} </small>
            <Button variant="text" />
          </FlexboxGrid.Item>
        </FlexboxGrid>

        <Divider />
        <b> Colors </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button color="default" />`} </small>
            <Button color="default" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button color="primary" />`} </small>
            <Button color="primary" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button color="danger" />`} </small>
            <Button color="danger" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}>{`<Button color="secondary" />`}</small>
            <Button color="secondary" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b> Size </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button size="xs" />`} </small>
            <Button size="xs" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button size="sm" />`} </small>
            <Button size="sm" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button size="md" />`} </small>
            <Button size="md" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={4}>
            <small style={styleObj}> {`<Button size="lg" />`} </small>
            <Button size="lg" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b>Icons (startIcon)</b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>{`<Button startIcon="home" />`}</small>
            <Button startIcon="home" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small
              style={styleObj}
            >{`<Button startIcon="bookmarks" color="primary" />`}</small>
            <Button startIcon="bookmarks" color="primary" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button startIcon="bolt" color="danger" />`}
            </small>
            <Button startIcon="bolt" color="danger" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button startIcon="book" color="secondary" />`}
            </small>
            <Button startIcon="book" color="secondary" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b>Icons (endIcon)</b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}> {`<Button endIcon="toys"/>`} </small>
            <Button endIcon="toys" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button endIcon="vignette" color="primary" />`}
            </small>
            <Button endIcon="vignette" color="primary" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button endIcon="whatshot" color="danger" />`}
            </small>
            <Button endIcon="whatshot" color="danger" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button endIcon="weekend" color="secondary" />`}
            </small>
            <Button endIcon="weekend" color="secondary" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b>Outline colors</b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button variant="outline" color="default" />`}
            </small>
            <Button color="default" variant="outline" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button variant="outline" color="primary" />`}
            </small>
            <Button color="primary" variant="outline" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button variant="outline" color="danger" />`}
            </small>
            <Button color="danger" variant="outline" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <small style={styleObj}>
              {`<Button variant="outline" color="secondary" />`}
            </small>
            <Button color="secondary" variant="outline" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
      </div>
    </div>
  );
};

export default Main;