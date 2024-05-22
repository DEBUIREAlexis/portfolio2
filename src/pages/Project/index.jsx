import colors from "../../utils/style/colors";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";
import Ks1 from "../../assets/KS-1.webp";
import Ks2 from "../../assets/KS-2.webp";
import Ks3 from "../../assets/KS-3.webp";
import Nc1 from "../../assets/NC-1.webp";
import Nc2 from "../../assets/NC-2.webp";
import Nc3 from "../../assets/NC-3.webp";
import Vg1 from "../../assets/VG-1.webp";
import Vg2 from "../../assets/VG-2.webp";
import Vg3 from "../../assets/VG-3.webp";

const StyledWrapper = styled.div`
  background-color: ${colors.highlight};
  margin-top: 40px;
  padding: 60px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    padding: 60px 20px 30px 20px;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0 0 0;
`;

const StyledTitle = styled.h2`
  font-size: 32px;
  letter-spacing: 1px;
  margin: 0;
  background: linear-gradient(
    to right,
    ${colors.secondary_background} 0%,
    ${colors.text_color} 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const StyledDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
`;

function Project() {
  const imgList = [Ks1, Ks2, Ks3, Nc1, Nc2, Nc3, Vg1, Vg2, Vg3];
  const techList = [
    "React",
    "SASS",
    "npm",
    "Lighthouse",
    "Wave",
    "Gimp",
    "Node.js",
    "Express",
    "MongoDB",
  ];
  return (
    <StyledWrapper id="project">
      <StyledTitle>Mes projets récents</StyledTitle>
      <StyledDescription>
        Voici les trois derniers projets que j'ai faits pendant ma formation
      </StyledDescription>
      <StyledCardWrapper>
        <ProjectCard
          list={imgList.splice(0, 3)}
          text="Ma première immersion dans React s'est déroulée à travers ce projet. Il m'a fallu initialement appréhender son fonctionnement et sa structure. Ce défi fut notable, car le projet était complexe, impliquant des animations et l'adoption de SASS. Cependant, la principale difficulté résidait dans la manipulation des props."
          title="Kasa"
          tech={techList.splice(0, 3)}
          cardId="kasa"
        />
        <ProjectCard
          list={imgList.splice(0, 3)}
          text="Au cours de mes études, j'ai entrepris un projet inhabituel consistant à optimiser le site web d'une photographe confrontée à des problèmes d'optimisation technique et de référencement SEO insatisfaisants. Le défi majeur résidait dans l'absence d'optimisation du site initial, principalement due à des images trop volumineuses au format obsolète. L'objectif était d'atteindre un score Lighthouse supérieur à 90 % dans tous les domaines, notamment sur mobile.
          "
          title="Optimisation d'un site"
          tech={techList.splice(0, 3)}
          cardId="optim"
        />
        <ProjectCard
          list={imgList.splice(0, 3)}
          text="Lors de ma formation, j'ai eu l'occasion de m'initier au développement backend pour la première fois. L'objectif était de concevoir une API. Le frontend avait déjà été développé et était accompagné d'une documentation détaillée sur les routes à appeler. Les données étaient stockées dans une base de données MongoDB, en tenant compte des principes de sécurité de base.
          "
          title="Mon vieux grimoire"
          tech={techList.splice(0, 3)}
          cardId="vxgrim"
        />
      </StyledCardWrapper>
    </StyledWrapper>
  );
}

export default Project;
