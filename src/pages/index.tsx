import * as React from "react";
import Modal from "react-modal";
import { Radar } from "../components/Radar";
import { useRadarData } from "../hooks/useRadarData";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import { Entry } from "../models/radar";
import { Login } from "../components/Login";
import "./index.css";

const IndexPage = () => {
  const { quadrants, entries, rings } = useRadarData();
  const [selectedEntry, setSelectedEntry] = React.useState<Entry | null>(null);

  const handleEntryClick = React.useCallback(setSelectedEntry, []);

  const { logged } = useGoogleAuth({ buttonElementId: "googleLoginElement" });

  if (!logged) {
    return <Login />;
  }

  function closeModal() {
    setSelectedEntry(null);
  }

  const isModalOpen = Boolean(selectedEntry);

  return (
    <main>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h1>{selectedEntry?.label}</h1>
        {selectedEntry?.comments ? (
          <div>
            {selectedEntry.comments.map((comment) => (
              <div key={comment.content}>
                <p>{comment.content}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Author{" "}
                  <img
                    style={{ width: 24, height: 24, borderRadius: 100 }}
                    src={`https://github.com/${comment.author}.png?size=40`}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {selectedEntry?.links ? (
          <div>
            <h2>Links</h2>
            <div>
              <ul>
                {selectedEntry.links.map((link) => (
                  <li key={link}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        <hr />
        <div>
          <a
            href="https://github.com/boldare/boldare-radar/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            Suggest changes
          </a>
        </div>
      </Modal>
      <Radar
        handleEntryClick={handleEntryClick}
        quadrants={quadrants}
        entries={entries}
        rings={rings}
      />
    </main>
  );
};

export default IndexPage;
