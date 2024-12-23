import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForMedia = () => {
  const links = [
    "http://www.weforum.org/people/iftekhar-enayetullah",
    "https://www.fastcompany.com/3019148/44waste-concern",
    "https://www.ashoka.org/fellow/iftekhar-enayetullah",
    "https://www.ashoka.org/fellow/h-md-maqsood-sinha",
    "http://ssir.org/articles/entry/qa_roundtable_on_impact_investing",
    "http://ssir.org/articles/entry/struggling_to_innovate_together_we_stand",
    "http://news.bbc.co.uk/2/hi/south_asia/2377629.stm",
    "http://myhero.com/hero.asp?hero=Garbage_Gold_CSM",
    "http://www.rediff.com/money/2002/nov/25ief8.htm",
    "http://nextbillion.net/tapping-new-ideas-in-social-entrepreneurship/",
    "http://www.bloomberg.com/bw/stories/2007-07-25/richard-bransons-latest-venturebusinessweek-business-news-stock-market-and-financial-advice",
    "http://www.des-livres-pour-changer-de-vie.fr/80-hommes-pour-changer-le-monde/",
    "http://news.bbc.co.uk/2/hi/south_asia/2379577.stm",
    "http://www.smh.com.au/articles/2003/01/02/1041196738174.html",
    "https://www.schwabfound.org/awardees/iftekhar-enayetullah",
    "https://www.schwabfound.org/awardees/a-h-md-maqsood-sinha" ,
    "https://www.thecasesolutions.com/waste-concern-8150 ",
    "https://www.flickr.com/photos/76176943@N08/15941025055",
    "https://pacscenter.stanford.edu/wp-content/uploads/2019/12/Seelos-Mair_AMP-2007-Profitable_business_model_and_market_creation_in_the_context_of_deep_poverty_A_Strategic_View.pdf",
    "https://www.changema.kr/fellows/972", 
    "https://www.knowwaste.net/Documents/Cash%20for%20Trash.pdf ",
    "https://www.gsb.stanford.edu/faculty-research/case-studies/waste-concern-dhaka-scaling-model-urban-waste-management ",
    "https://www.theguardian.com/society/streetsmarts/story/0,,2221738,00.html",
    "https://sdgs.un.org/partnerships/waste-concern-publicprivate-partnership-and-community-based-composting-dhaka ",
    "https://www.unescap.org/sites/default/files/Concept%20Note%20WUF9%20Side-Event-IRRCs.pdf ",
    "http://news.bbc.co.uk/2/hi/south_asia/2379577.stm ",
    "https://today.thefinancialexpress.com.bd/education-youth/lessons-from-16-inspiring-personalities-of-bangladesh-1504709923",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        
        <h1 className="text-left text-3xl font-bold text-[#00274D]">For Media</h1>
      </div>
      {/* Links Section */}
      <main className="flex-grow container mx-auto px-5 py-10 ">
        <ul className="list-none space-y-3">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 text-sm font-semibold no-underline hover:text-blue-950 transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ForMedia;
