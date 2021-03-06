// Type definitions for atom-keymap (v6.3.1)
// Project: https://github.com/atom/atom-keymap
// Definitions by: david-driscoll <https://github.com/david-driscoll/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Generated by: https://github.com/david-driscoll/atom-typescript-generator
// Generation tool by david-driscoll <https://github.com/david-driscoll/>
/// <reference path="../event-kit/event-kit.d.ts" />
declare module AtomKeymap {
    /**
     * This custom subclass of CustomEvent exists to provide the ::abortKeyBinding
     * method, as well as versions of the ::stopPropagation methods that record the
     * intent to stop propagation so event bubbling can be properly simulated for
     * detached elements.
     */
    class CommandEvent /*extends CustomEvent*/ {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        keyBindingAborted: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        propagationStopped: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        abortKeyBinding() : KeyBinding;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        stopPropagation() : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        stopImmediatePropagation() : any;
    
    }

    /**
     * KeyBinding
     * This class was not documented by atomdoc, assume it is private. Use with caution.
     */
    class KeyBinding {
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        static currentIndex: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        source: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        command: string;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        keystrokes: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        priority: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        enabled: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        constructor(source? : any, command? : string, keystrokes? : any, selector? : string, priority? : any);
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        matches(keystroke? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        compare(keyBinding? : KeyBinding) : any;
    
    }

    /**
     * Allows commands to be associated with keystrokes in a
     * context-sensitive way. In Atom, you can access a global instance of this
     * object via `atom.keymaps`.
     */
    export class KeymapManager {
        /**
         * Create a keydown DOM event for testing purposes.
         * @param key? - The key or keyIdentifier of the event. For example, `'a'`, `'1'`, `'escape'`, `'backspace'`, etc.
         * @param options? - An {Object} containing any of the following:
         */
        static buildKeydownEvent(key? : any, options? : Object) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        static buildKeyupEvent(key? : any, options? : any) : any;
    
        /**
         * Properties
         * This field or method was marked private by atomdoc. Use with caution.
         */
        partialMatchTimeout: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        defaultTarget: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        pendingPartialMatches: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        pendingStateTimeoutHandle: any /* default */;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        dvorakQwertyWorkaroundEnabled: any /* default */;
    
        /**
         * Create a new KeymapManager.
         * @param options? - An {Object} containing properties to assign to the keymap.  You can pass custom properties to be used by extension methods. The following properties are also supported:
         */
        constructor(options? : Object);
    
        /**
         * Clear all registered key bindings and enqueued keystrokes. For use
         * in tests. 
         */
        clear() : void;
    
        /**
         * Unwatch all watched paths. 
         */
        destroy() : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        enableDvorakQwertyWorkaroundIfNeeded() : any;
    
        /**
         * Invoke the given callback when one or more keystrokes completely
         * match a key binding.
         * @param callback - {Function} to be called when keystrokes match a binding.
         */
        onDidMatchBinding(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Invoke the given callback when one or more keystrokes partially
         * match a binding.
         * @param callback - {Function} to be called when keystrokes partially match a binding.
         */
        onDidPartiallyMatchBindings(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Invoke the given callback when one or more keystrokes fail to match
         * any bindings.
         * @param callback - {Function} to be called when keystrokes fail to match any bindings.
         */
        onDidFailToMatchBinding(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Invoke the given callback when a keymap file is reloaded.
         * This field or method was marked private by atomdoc. Use with caution.
         * @param callback - {Function} to be called when a keymap file is reloaded.
         */
        onDidReloadKeymap(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Invoke the given callback when a keymap file is unloaded.
         * This field or method was marked private by atomdoc. Use with caution.
         * @param callback - {Function} to be called when a keymap file is unloaded.
         */
        onDidUnloadKeymap(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Invoke the given callback when a keymap file not able to be loaded.
         * @param callback - {Function} to be called when a keymap file is unloaded.
         */
        onDidFailToReadFile(callback : Function /* needs to be defined */) : EventKit.Disposable;
    
        /**
         * Add sets of key bindings grouped by CSS selector.
         * @param source? - A {String} (usually a path) uniquely identifying the given bindings so they can be removed later.
         * @param priority? - A {Number} used to sort keybindings which have the same specificity. Defaults to `0`. 
         */
        add(source? : string, keyBindingsBySelector? : ScopedPropertyStore.Selector, priority? : number) : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        removeBindingsFromSource(source? : any) : void;
    
        /**
         * Get all current key bindings.
         */
        getKeyBindings() : KeyBinding[];
    
        /**
         * Get the key bindings for a given command and optional target.
         * @param params? - An {Object} whose keys constrain the binding search:
         */
        findKeyBindings(params? : Object) : KeyBinding[];
    
        /**
         * Load the key bindings from the given path.
         * @param options? - An {Object} containing the following optional keys:
         */
        loadKeymap(bindingsPath? : string, options? : Object) : any;
    
        /**
         * Cause the keymap to reload the key bindings file at the given path
         * whenever it changes.
         * 
         * This method doesn't perform the initial load of the key bindings file. If
         * that's what you're looking for, call {::loadKeymap} with `watch: true`.
         * @param options? - An {Object} containing the following optional keys:
         */
        watchKeymap(filePath? : string, options? : Object) : any;
    
        /**
         * Called by the path watcher callback to reload a file at the given path. If
         * we can't read the file cleanly, we don't proceed with the reload. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        reloadKeymap(filePath? : string, options? : any) : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        readKeymap(filePath? : string, suppressErrors? : any) : any;
    
        /**
         * Determine if the given path should be loaded on this platform. If the
         * filename has the pattern '<platform>.cson' or 'foo.<platform>.cson' and
         * 
         * <platform> does not match the current platform, returns false. Otherwise
         * returns true. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        filePathMatchesPlatform(filePath? : string) : string;
    
        /**
         * Dispatch a custom event associated with the matching key binding for
         * the given `KeyboardEvent` if one can be found.
         * 
         * If a matching binding is found on the event's target or one of its
         * ancestors, `.preventDefault()` is called on the keyboard event and the
         * binding's command is emitted as a custom event on the matching element.
         * 
         * If the matching binding's command is 'native!', the method will terminate
         * without calling `.preventDefault()` on the keyboard event, allowing the
         * browser to handle it as normal.
         * 
         * If the matching binding's command is 'unset!', the search will continue from
         * the current element's parent.
         * 
         * If the matching binding's command is 'abort!', the search will terminate
         * without dispatching a command event.
         * 
         * If the event's target is `document.body`, it will be treated as if its
         * target is `.defaultTarget` if that property is assigned on the keymap.
         * @param event? - A `KeyboardEvent` of type 'keydown' 
         */
        handleKeyboardEvent(event? : any, options? : (replay? : any,disabledBindings? : any) => any) : void;
    
        /**
         * Translate a keydown event to a keystroke string.
         * @param event? - A `KeyboardEvent` of type 'keydown'
         * Returns a {String} describing the keystroke.
         */
        keystrokeForKeyboardEvent(event? : any) : string;
    
        /**
         * Get the number of milliseconds allowed before pending states caused
         * by partial matches of multi-keystroke bindings are terminated.
         * Returns a {Number}
         */
        getPartialMatchTimeout() : number;
    
        /**
         * Private
         * This field or method was marked private by atomdoc. Use with caution.
         */
        simulateTextInput(keydownEvent? : any) : string;
    
        /**
         * For testing purposes 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        getOtherPlatforms() : any;
    
        /**
         * 
         * This field or method was marked private by atomdoc. Use with caution.
         * Private: Finds all key bindings whose keystrokes match the given keystrokes.
         * Returns
         * both partial and exact matches.
         */
        findMatchCandidates(keystrokeArray? : any, disabledBindings? : any) : any;
    
        /**
         * Determine which of the given bindings have selectors matching the target or
         * one of its ancestors. This is used by {::handleKeyboardEvent} to determine
         * if there are any partial matches for the keyboard event. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        findPartialMatches(partialMatchCandidates? : any, target? : any) : any;
    
        /**
         * Find the matching bindings among the given candidates for the given target,
         * ordered by specificity. Does not traverse up the target's ancestors. This is
         * used by {::handleKeyboardEvent} to find a matching binding when there are no
         * partially-matching bindings. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        findExactMatches(exactMatchCandidates? : any, target? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        clearQueuedKeystrokes() : void;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        enterPendingState(pendingPartialMatches? : any, enableTimeout? : any) : any;
    
        /**
         * This field or method was not documented by atomdoc, assume it is private. Use with caution.
         */
        cancelPendingState() : any;
    
        /**
         * This is called by {::handleKeyboardEvent} when no matching bindings are
         * found for the currently queued keystrokes or by the pending state timeout.
         * It disables the longest of the pending partially matching bindings, then
         * replays the queued keyboard events to allow any bindings with shorter
         * keystroke sequences to be matched unambiguously.
         * 
         * Note that replaying events has a recursive behavior. Replaying will set
         * member state (e.g. @queuedKeyboardEvents) just like real events, and will
         * likely result in another call this function. The replay process will
         * potentially replay the events (or a subset of events) several times, while
         * disabling bindings here and there. See any spec that handles multiple
         * keystrokes failures to match a binding. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        terminatePendingState(fromTimeout? : any) : any;
    
        /**
         * After we match a binding, we call this method to dispatch a custom event
         * based on the binding's command. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        dispatchCommandEvent(command? : string, target? : any, keyboardEvent? : any) : CommandEvent;
    
        /**
         * Chromium does not bubble events dispatched on detached targets, which makes
         * testing a pain in the ass. This method simulates bubbling manually. 
         * This field or method was marked private by atomdoc. Use with caution.
         */
        simulateBubblingOnDetachedTarget(target? : any, commandEvent? : CommandEvent) : any;
    
    }

}
declare module "atom-keymap" {
    export = AtomKeymap.CommandEvent;
}
