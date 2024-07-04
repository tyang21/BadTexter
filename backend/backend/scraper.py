from imessage_reader import fetch_data
from collections import Counter


def grabFrequentData():
    DB_PATH = "/Users/tyleryang//Library/Messages/chat.db"

    # Create a FetchData instance
    fd = fetch_data.FetchData(DB_PATH)

    # Store messages in my_data
    # This is a list of tuples containing user id, message and service (iMessage or SMS).
    my_data = fd.get_messages()
    stop_words = {
        "a", "an", "the", "about", "above", "across", "after", "against", "along", "among", "around", "at", "before",
        "behind", "below", "beneath", "beside", "between", "beyond", "but", "by", "concerning", "considering", "despite",
        "down", "during", "except", "for", "from", "in", "inside", "into", "like", "near", "of", "off", "on", "onto", 
        "out", "outside", "over", "past", "regarding", "since", "through", "throughout", "to", "toward", "under", 
        "underneath", "until", "up", "upon", "with", "within", "without", "and", "but", "for", "nor", "or", "so", "yet",
        "i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", "my", "your", "his", "her", 
        "its", "our", "their", "mine", "yours", "theirs", "this", "that", "these", "those", "am", "is", "are", "was", 
        "were", "be", "been", "being", "have", "has", "had", "do", "does", "did", "will", "would", "shall", "should", 
        "can", "could", "may", "might", "must", "ought", "i.e.", "e.g.", "thus", "hence", "there", "here", "when", 
        "where", "why", "how", "what", "which", "who", "whom", "whose", "if", "then", "than", "just", "now", "very", 
        "not", "too", "also", "as", "though", "although", "even", "yet", "only"
    }
    words = []
    for msg in my_data:
        if msg[5] == 1:
            if msg[1] == None:
                continue
            else:
                filtered = [word for word in msg[1].split() if word.lower() not in stop_words]
                words.extend(filtered)
    c = Counter(words).most_common(200)
    return c



